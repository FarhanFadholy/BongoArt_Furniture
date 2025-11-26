export const categories = [
    { id: "all", label: "All Collections" },
    { id: "furniture", label: "Furniture" },
    { id: "lighting", label: "Lighting" },
    { id: "stone", label: "Stone Collection" },
    { id: "decor", label: "Home Decor" },
];

// Helper to generate items
const furnitureItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'].map((name, idx) => ({
    id: `furn-${idx}`,
    name: `Signature Furniture ${name.toUpperCase()}`,
    category: "furniture",
    image: `/products/furniture/${name}.webp`,
    description: "Handcrafted from premium sustainable teak wood, this piece embodies the perfect balance of modern design and traditional craftsmanship. Built to last generations.",
    dimensions: "L 60cm x W 60cm x H 85cm",
    material: "Solid Teak Wood",
    weight: "12kg"
}));

const lightingItems = Array.from({ length: 12 }, (_, i) => i + 1).map((num, idx) => ({
    id: `light-${idx}`,
    name: `Lumina Series ${num}`,
    category: "lighting",
    image: `/products/lighting/c (${num}).webp`,
    description: "Illuminate your space with our Lumina Series. Featuring natural woven materials that cast warm, intricate shadows, creating a serene atmosphere in any room.",
    dimensions: "H 120cm x D 40cm",
    material: "Rattan & Rice Paper",
    weight: "3kg"
}));

const stoneFiles = [
    'a (2)', 'a (3)', 'a (5)', 'a (6)', 'a (7)', 'a (8)', 'a (9)', 'a (10)', 'a (11)', 'a (12)',
    'e (2)', 'e (3)', 'e (4)', 'e (5)', 'e (6)', 'e (8)'
];
const stoneItems = stoneFiles.map((name, idx) => ({
    id: `stone-${idx}`,
    name: `River Stone Artifact ${idx + 1}`,
    category: "stone",
    image: `/products/stone/${name}.webp`,
    description: "Carved from a single river boulder, this stone piece retains its natural organic exterior while featuring a perfectly polished interior. A true statement of nature's beauty.",
    dimensions: "Approx. L 80cm x W 50cm",
    material: "Natural River Stone",
    weight: "45kg"
}));

const decorFiles = [
    'a (1)', 'a (4)', 'a (13)', 'a (14)', 'a (15)', 'a (16)', 'a (17)', 'a (18)', 'a (19)', 'a (20)', 'a (21)', 'a (22)',
    'd (1)', 'd (2)', 'd (3)', 'd (4)', 'd (5)', 'd (6)', 'd (7)', 'd (8)', 'd (9)', 'd (10)', 'e (7)'
];
const decorItems = decorFiles.map((name, idx) => ({
    id: `decor-${idx}`,
    name: `Handcrafted Decor ${idx + 1}`,
    category: "decor",
    image: `/products/decor/${name}.webp`,
    description: "Add a touch of artisanal charm to your home with our handcrafted decor collection. Each piece is unique and tells a story of skilled artistry.",
    dimensions: "Varies by piece",
    material: "Mixed Media (Wood, Clay, Metal)",
    weight: "1-5kg"
}));

export const products = [
    ...furnitureItems,
    ...lightingItems,
    ...stoneItems,
    ...decorItems
];
