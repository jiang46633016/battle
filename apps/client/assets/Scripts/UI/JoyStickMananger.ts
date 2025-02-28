import { _decorator, Component, EventTouch, Input, input, Node, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('JoyStickMananger')
export class JoyStickMananger extends Component {
    input: Vec2;

    private body: Node = null;
    private stick: Node = null;
    private defaultPos: Vec2;
    private radius: number
    onLoad() {
        this.body = this.node.getChildByName("Body");
        this.stick = this.body.getChildByName("Stick");
        this.defaultPos = new Vec2(this.body.position.x, this.body.position.y);
        this.radius = this.body.getComponent(UITransform).contentSize.x / 2;
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onDestroy() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event: EventTouch) {
        const touchPos = event.getLocation();
        this.body.setPosition(touchPos.x, touchPos.y);
    }

    onTouchMove(event) {
        const touchPos = event.getLocation();
        const stickPos = new Vec2(touchPos.x - this.body.position.x, touchPos.y - this.body.position.y)
        if (stickPos.length() > this.radius) {
            stickPos.multiplyScalar(this.radius / stickPos.length());
        }
        this.stick.setPosition(stickPos.x, stickPos.y);

        this.input = stickPos.clone().normalize();
    }

    onTouchEnd() {
        this.body.setPosition(this.defaultPos.x, this.defaultPos.y);
        this.stick.setPosition(0, 0);

        this.input = Vec2.ZERO;
    }
}

