import { linkTo } from '@storybook/addon-links';

import Player from '../src/components/Player';

export default {
    title: 'Player',
    component: Player,
};

export const East = () => ({
    components: { Player },
    template: '<Player :seat_number="1"></Player>'
});

export const South = () => ({
    components: { Player },
    template: '<Player :seat_number="2"></Player>'
});

export const West = () => ({
    components: { Player },
    template: '<Player :seat_number="3"></Player>'
});

export const North = () => ({
    components: { Player },
    template: '<Player :seat_number="4"></Player>'
});