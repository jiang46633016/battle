import { _decorator, Component, director, instantiate, Node, size } from 'cc';
import DataManager from '../../Global/DataManager';
import { EntityTypeEnum, IActor, InputTypeEnum } from '../../Common';
import { ActorStateMachine } from './ActorStateMachine';
import { EntityStateEnum } from '../../Enum';
import { EntityManager } from '../../Base/EntityManager';
import { WeaponMananger } from '../Weapon/WeaponMananger';
import { rad2Angle } from '../../Utils';
const { ccclass, property } = _decorator;

@ccclass('ActorMananger')
export class ActorMananger extends EntityManager {
    private wm: WeaponMananger
    start() {

    }

    init(data: IActor) {
        this.fsm = this.addComponent(ActorStateMachine);
        this.fsm.init(data.type);

        this.state = EntityStateEnum.Idle;

        const prefab = DataManager.Instance.prefabMap.get(EntityTypeEnum.Weapon1);
        const weapon = instantiate(prefab);
        weapon.setParent(this.node);
        this.wm = weapon.addComponent(WeaponMananger);
        this.wm.init(data);
    }

    tick(dt) {
        if (DataManager.Instance.jm.input && DataManager.Instance.jm.input.length()) {
            const { x, y } = DataManager.Instance.jm.input;
            DataManager.Instance.applyInput({
                id: 1,
                type: InputTypeEnum.ActorMove,
                direction: {
                    x, y
                },
                dt,
            })

            console.log(DataManager.Instance.state.actors[0].position.x,
                DataManager.Instance.state.actors[0].position.y
            )

            this.state = EntityStateEnum.Run;
        } else {
            this.state = EntityStateEnum.Idle;
        }
    }

    render(data: IActor) {
        const { direction, position } = data;
        this.node.setPosition(data.position.x, data.position.y);

        if (direction.x !== 0) {
            this.node.setScale(direction.x > 0 ? 1 : -1, 1);
        }

        const side = Math.sqrt(direction.x ** 2 + direction.y ** 2);
        const rad = Math.asin(direction.y / side);
        const angle = rad2Angle(rad);

        this.wm.node.setRotationFromEuler(0, 0, angle);
    }
}

