import state from './state';
import actions from './actions'
import mutations from './mutations'
import getters from './getters';

export const post = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}