import { _decorator, Component, Node } from 'cc';
import DataManager from '../Global/DataManager';
import { JoyStickMananger } from '../UI/JoyStickMananger';
const { ccclass, property } = _decorator;

@ccclass('BattleMananger')
export class BattleMananger extends Component {
    private stage: Node;
    private ui: Node
    onLoad() {
        this.stage = this.node.getChildByName("Stage");
        this.ui = this.node.getChildByName("UI");
        DataManager.Instance.jm = this.ui.getComponentInChildren(JoyStickMananger);
    }

    start() {

    }

    update(deltaTime: number) {

    }
}

