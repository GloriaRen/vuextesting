export default {
  buyVip ({ commit }, e) {
    return new Promise((resolve) => {
      // mock api交互
      setTimeout(() => {
        // 修改本地state
        commit('setMemberInfo', {
          userStatus: e.userStatus,
          vipLevel: e.vipLevel
        })
        resolve('购买成功')
      }, 200)
    })
  },
  getFreeVip ({ commit, state }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (state.userStatus === 0) {
          commit('setMemberInfo', {
            userStatus: 1
          })
          resolve('分享成功')
        }
      },500)
    })
  }
}