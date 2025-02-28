// /*
//  * @Author: jianghaifeng 466338016@qq.com
//  * @Date: 2025-02-22 20:27:31
//  * @LastEditors: jianghaifeng 466338016@qq.com
//  * @LastEditTime: 2025-02-28 10:37:47
//  * @FilePath: /cocos-nodejs-io-game-start-demo/apps/client/assets/Scripts/Base/StateMachineTemplate.ts
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// import { _decorator, Animation, AnimationClip } from "cc";
// import State from "../../Base/State";
// import StateMachine, { getInitParamsTrigger } from "../../Base/StateMachine";
// import { EntityTypeEnum } from "../../Common";
// import { EntityStateEnum, ParamsNameEnum } from "../../Enum";
// const { ccclass } = _decorator;

// @ccclass("ActorStateMachine")
// export class ActorStateMachine extends StateMachine {
//   init(type: EntityTypeEnum) {
//     this.type = type;
//     this.animationComponent = this.node.addComponent(Animation);
//     this.initParams();
//     this.initStateMachines();
//     this.initAnimationEvent();
//   }

//   initParams() {
//     this.params.set(ParamsNameEnum.Idle, getInitParamsTrigger());
//     this.params.set(ParamsNameEnum.Run, getInitParamsTrigger());
//   }

//   initStateMachines() {
//     this.stateMachines.set(ParamsNameEnum.Idle, new State(this, `${this.type}${EntityStateEnum.Idle}`, AnimationClip.WrapMode.Loop));
//     this.stateMachines.set(ParamsNameEnum.Run, new State(this, `${this.type}${EntityStateEnum.Run}`, AnimationClip.WrapMode.Loop));
//   }

//   initAnimationEvent() {}

//   run() {
//     switch (this.currentState) {
//       case this.stateMachines.get(ParamsNameEnum.Idle):
//       case this.stateMachines.get(ParamsNameEnum.Run):
//         if (this.params.get(ParamsNameEnum.Run).value) {
//           this.currentState = this.stateMachines.get(ParamsNameEnum.Run);
//         } else if (this.params.get(ParamsNameEnum.Idle).value) {
//           this.currentState = this.stateMachines.get(ParamsNameEnum.Idle);
//         } else {
//           this.currentState = this.currentState;
//         }
//         break;
//       default:
//         this.currentState = this.stateMachines.get(ParamsNameEnum.Idle);
//         break;
//     }
//   }
// }
