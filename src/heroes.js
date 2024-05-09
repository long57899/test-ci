// Matchers

const orderByHealth = (heroes) => heroes.sort((h1, h2) => h2.health - h1.health); // по убыванию
export default orderByHealth;
