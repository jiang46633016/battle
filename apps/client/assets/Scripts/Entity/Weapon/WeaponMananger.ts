/*
 * @Author: jianghaifeng 466338016@qq.com
 * @Date: 2025-02-28 14:33:52
 * @LastEditors: jianghaifeng 466338016@qq.com
 * @LastEditTime: 2025-02-28 14:41:24
 * @FilePath: /cocos-nodejs-io-game-start-demo/apps/client/assets/Scripts/Entity/Weapon/WeaponMananger.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { _decorator, Component, director, instantiate, Node } from 'cc';
import DataManager from '../../Global/DataManager';
import { EntityTypeEnum, IActor, InputTypeEnum } from '../../Common';
import { EntityStateEnum } from '../../Enum';
import { EntityManager } from '../../Base/EntityManager';
import { WeaponStateMachine } from './WeaponStateMachine';
const { ccclass, property } = _decorator;

@ccclass('WeaponMananger')
export class WeaponMananger extends EntityManager {
    private body: Node;
    private anchor: Node;
    private point: Node;

    init(data: IActor) {
        this.body = this.node.getChildByName("Body");
        this.anchor = this.body.getChildByName("Anchor");
        this.point = this.anchor.getChildByName("Point");

        this.fsm = this.body.addComponent(WeaponStateMachine);
        this.fsm.init(data.weaponType);

        this.state = EntityStateEnum.Idle;
    }
}

