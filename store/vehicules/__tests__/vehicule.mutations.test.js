import mutations from '../mutations';

describe('Vehicules Vuex Store - Mutations', () => {

    const state = {
        vehicules: [
            { id: 1, title: "Location camping car" },
            { id: 2, title: "Location camping car" }
        ],
        vehicule: {
            id: 1, title: "Location camping car"
        },
    };
    let localState;

    beforeEach(() => {
        // Reset state before each test
        localState = {
            ...state
        };
    });

    it('Mutation SET_VEHICULES store vehicules list', () => {
        const payload = [
            { id: 1, title: "Location camping car" },
            { id: 2, title: "Location camping car" }
        ];
        mutations['SET_VEHICULES'](localState, payload);
        expect(localState.vehicules).toEqual(payload);
    });

    it('Mutation SET_VEHICULE store a single vehicule', () => {
        const payload = {
            id: 1, title: "Location camping car"
        };
        mutations['SET_VEHICULE'](localState, payload);
        expect(localState.vehicule).toEqual(payload);
    });
});
