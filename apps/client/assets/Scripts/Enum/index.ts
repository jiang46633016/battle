/*
 * @Author: jianghaifeng 466338016@qq.com
 * @Date: 2025-02-22 20:27:31
 * @LastEditors: jianghaifeng 466338016@qq.com
 * @LastEditTime: 2025-02-28 14:30:47
 * @FilePath: /cocos-nodejs-io-game-start-demo/apps/client/assets/Scripts/Enum/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export enum FsmParamTypeEnum {
  Number = "Number",
  Trigger = "Trigger",
}

export enum ParamsNameEnum {
  Idle = "Idle",
  Run = "Run",
  Attack = "Attack",
}

export enum EventEnum { }


export enum PrefabPathEnum {
  Map = "prefab/Map",
  Actor1 = "prefab/Actor",
  Weapon1 = "prefab/Weapon1",
}

export enum TexturePathEnum {
  Actor1Idle = "texture/actor/actor1/idle",
  Actor1Run = "texture/actor/actor1/run",
  Weapon1Idle = "texture/weapon/weapon1/idle",
  Weapon1Attack = "texture/weapon/weapon1/attack",
}

export enum EntityStateEnum {
  Idle = "Idle",
  Run = "Run",
  Attack = "Attack",
}