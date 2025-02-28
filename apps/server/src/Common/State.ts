/*
 * @Author: jianghaifeng 466338016@qq.com
 * @Date: 2025-02-24 21:28:42
 * @LastEditors: jianghaifeng 466338016@qq.com
 * @LastEditTime: 2025-02-28 14:39:59
 * @FilePath: /cocos-nodejs-io-game-start-demo/apps/client/assets/Scripts/Common/State.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EntityTypeEnum, InputTypeEnum } from "./Enum"

export interface Ivec2 {
    x: number
    y: number
}

export interface IActor {
    id: number,
    position: Ivec2,
    direction: Ivec2,
    type: EntityTypeEnum,
    weaponType: EntityTypeEnum,
}

export interface IState {
    actors: any[]
}

export interface IActorMove {
    id: number,
    type: InputTypeEnum.ActorMove,
    direction: Ivec2,
    dt: number
}