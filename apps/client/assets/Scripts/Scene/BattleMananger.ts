import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import DataManager from '../Global/DataManager';
import { JoyStickMananger } from '../UI/JoyStickMananger';
import { ResourceManager } from '../Global/ResourceManager';
import { ActorMananger } from '../Entity/Actor/ActorMananger';
import { PrefabPathEnum } from '../Enum';
import { EntityTypeEnum } from '../Common';
const { ccclass, property } = _decorator;

@ccclass('BattleMananger')
export class BattleMananger extends Component {
    private stage: Node;
    private ui: Node

    private shouldUpdate = false;

    onLoad() {
        this.stage = this.node.getChildByName("Stage");
        this.ui = this.node.getChildByName("UI");
        this.stage.destroyAllChildren();
        DataManager.Instance.jm = this.ui.getComponentInChildren(JoyStickMananger);
    }

    async start() {
        await this.loadRes();
        this.initMap();
        this.shouldUpdate = true;
    }
    

    async loadRes() {
        const list = [];
        for (const type in PrefabPathEnum) {
            const p = ResourceManager.Instance.loadRes(PrefabPathEnum[type], Prefab).then((prefab) => {
                DataManager.Instance.prefabMap.set(type, prefab);
            })
            list.push(p);
        }
        await Promise.all(list);
    }

    initMap() {
        const prefab = DataManager.Instance.prefabMap.get(EntityTypeEnum.Map)
        const map = instantiate(prefab);
        map.setParent(this.stage);
    }

    update(deltaTime: number) {
        if (!this.shouldUpdate) {
            return;
        }
        this.render();
    }

    render() {
        this.renderActor();
    }

    async renderActor() {
        for (const data of DataManager.Instance.state.actors) {
            const { id, type } = data;
            let am = DataManager.Instance.actorMap.get(id);
            if (!am) {
                const prefab = DataManager.Instance.prefabMap.get(type);
                const actor = instantiate(prefab);
                actor.setParent(this.stage);
                am = actor.addComponent(ActorMananger);
                DataManager.Instance.actorMap.set(data.id, am); 
                am.init(data)
            } else {
                am.render(data);
            }
        }
    }
}

