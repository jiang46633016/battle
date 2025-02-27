import { _decorator, Component, director, Node } from 'cc';
import DataManager from '../../Global/DataManager';
import { IActor, InputTypeEnum } from '../../Common';
const { ccclass, property } = _decorator;

@ccclass('ActorMananger')
export class ActorMananger extends Component {
    start() {

    }

    init(data: IActor) {

    }

    update(dt) {
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
        }
    }

    render(data: IActor) {
        this.node.setPosition(data.position.x, data.position.y);
    }
}

