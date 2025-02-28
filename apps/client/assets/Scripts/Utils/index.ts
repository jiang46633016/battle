/*
 * @Author: jianghaifeng 466338016@qq.com
 * @Date: 2025-02-22 20:27:31
 * @LastEditors: jianghaifeng 466338016@qq.com
 * @LastEditTime: 2025-02-28 14:47:25
 * @FilePath: /cocos-nodejs-io-game-start-demo/apps/client/assets/Scripts/Utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { SpriteFrame } from "cc";

const INDEX_REG = /\((\d+)\)/;

const getNumberWithinString = (str: string) => parseInt(str.match(INDEX_REG)?.[1] || "0");

export const sortSpriteFrame = (spriteFrame: Array<SpriteFrame>) =>
  spriteFrame.sort((a, b) => getNumberWithinString(a.name) - getNumberWithinString(b.name));


export const rad2Angle = (rad: number) => {
  return (rad / Math.PI) * 180;
}