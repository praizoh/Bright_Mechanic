const state = {
    type: null,
    message: null
};

const actions = {
    success({ commit }, message) {
        commit('success', message);
    },
};

const mutations = {
    success(state, message) {
        state.type = 'alert-success';
        state.message = message;
    }
};

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
};
