export const state = () => ({
  initialState: 'test state'
})

export const mutation = {
  SET_STATE: (state, data) => {
    state.initialState = data
  }
}

export const actions = {
  newFunction ({ rootState, commit, dispatch, state }, params) {
    return new Promise((resolve, reject) => {
      // do something here
    })
  }
}