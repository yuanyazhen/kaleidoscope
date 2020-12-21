/**
 * 观察者模式
 */
const Event = (function () {
  // 监听缓存列表
  let clientList = {};
  let listen = null;
  let trigger = null;
  let remove = null;

  // 监听
  listen = function (key, fn) {
    if (!clientList[key]) clientList[key] = [];
    clientList[key].push(fn);
  };

  trigger = function (key, msg) {
    if (!clientList[key] || clientList[key].length <= 0)
      throw new Error("not found");

    clientList[key].forEach((fn) => {
      fn(msg);
    });
  };

  remove = function (key, fn) {
    const fns = clientList[key];
    if (!fns) return false;

    if (!fn) {
      clientList[key] = [];
    } else {
      for (let i = 0, len = fns.length; i < len; i++) {
        const _fn = fns[i];
        if (_fn === fn) {
          fns.splice(i, 1);
        }
      }
    }
  };

  return {
    listen,
    trigger,
    remove
  }
})();

export default Event;

// --- 全局使用 ---
// 订阅
// Event.listen('say', (message) => {
//   console.log('订阅者收到信息: ' + message)
// });
// // 发布
// Event.trigger('say', '--> test say message');
