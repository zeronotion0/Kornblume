import { useDataStore } from '../stores/dataStore'

const items = useDataStore().items;

const getId = (material: string) => {
    const item = items.find(item => item.Name === material);
    return item ? item.Id : null;
};

const getRarity = (material: string) => {
    const item = items.find(item => item.Name === material);
    return item ? item.Rarity : null;
};

const getStageBackgroundId = (id: number) => {
    if (id <= 21) return 1;
    if (id <= 45) return 2;
    if (id <= 63) return 3;
    if (id <= 85) return 4;
    if (id === 86) return 5;
    if (id === 87) return 6;
    if (id <= 90) return 7;
    if (id <= 93) return 8;
    if (id <= 96) return 9;
    if (id <= 99) return 10;
    return 1;
}

export const getItemImagePathByMatl = (material: string) => {
    const id = getId(material);
    return id ? `images/items/icon/${id}.webp` : '';
};

export const getBorderImagePathByMatl = (material: string) => {
    const rarity = getRarity(material);
    return rarity ? `images/items/border/${rarity}.webp` : '';
};

export function getActivityImagePathByStage (stage: string) {
    return `images/items/common/${stage === 'Oneiric Shop' ? 1 : 0}.webp`
}

export function getStageImagePathByStage (stage: number) {
    return `images/items/stage/${getStageBackgroundId(stage)}.webp`
}

export function getArcanistIconImagePath (id: number | string) {
    return `images/arcanists/icon/${id}.webp`;
}

export function getArcanistI0ImagePath (id: number | string) {
    return `images/arcanists/i0/${id}.webp`;
}

export function getArcanistI2ImagePath (id: number | string) {
    return `images/arcanists/i2/${id}.webp`;
}

export function getArcanistAfflatusPath (afflatus: string) {
    afflatus = afflatus.toLowerCase();
    return `images/arcanists/misc/logo-${afflatus}.webp`;
}

export function getArcanistAfflatusIconPath (afflatus: string) {
    afflatus = afflatus.toLowerCase();
    return `images/arcanists/misc/${afflatus}.webp`;
}

export function getArcanistDmgTypePath (dmgType: string) {
    return `images/arcanists/misc/dmg-type-${dmgType}.webp`;
}

export function getArcanistFramePath (rarity: number) {
    return `images/arcanists/misc/bg${rarity}.webp`;
}
