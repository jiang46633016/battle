/*
 * @Author: jianghaifeng 466338016@qq.com
 * @Date: 2025-02-24 21:39:53
 * @LastEditors: jianghaifeng 466338016@qq.com
 * @LastEditTime: 2025-02-27 17:24:39
 * @FilePath: /cocos-nodejs-io-game-start-demo/apps/client/assets/Scripts/Global/DataManager.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Prefab } from "cc";
import Singleton from "../Base/Singleton";
import { EntityTypeEnum, IActorMove, IState } from "../Common";
import { ActorMananger } from "../Entity/Actor/ActorMananger";
import { JoyStickMananger } from "../UI/JoyStickMananger";

const ACTOR_SPEED = 100;

export default class DataManager extends Singleton {
  static get Instance() {
    return super.GetInstance<DataManager>();
  }

  jm: JoyStickMananger
  actorMap: Map<number, ActorMananger> = new Map();
  prefabMap: Map<string, Prefab> = new Map();

  state: IState = {
    actors: [
      {
        id: 1,
        type: EntityTypeEnum.Actor1,
        position: {
          x: 0,
          y: 0
        },
        direction: {
          x: 1,
          y: 0
        }
      }
    ]
  }


  applyInput(input: IActorMove) {
    const { id, dt, direction: { x, y } } = input;

    const actor = this.state.actors.find(e => e.id == id);
    actor.direction.x = x;
    actor.direction.y = y;

    actor.position.x += x * dt * ACTOR_SPEED;
    actor.position.y += y * dt * ACTOR_SPEED;
  }

}
