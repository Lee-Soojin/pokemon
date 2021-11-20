class Pokemon {
  constructor() {
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async showList(offset) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`,
      this.requestOptions
    );
    const result = await response.json();
    const res = result.results;
    return res;
  }

  async getData(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      this.requestOptions
    );
    const result = await response.json();
    const abilities = [];
    const types = [];
    const stats = [];
    result.abilities.map((ab) => {
      abilities.push(ab["ability"].name);
    });
    result.types.map((type) => {
      types.push(type["type"].name);
    });
    result.stats.map((stat) => {
      stats.push({ base_stat: stat["base_stat"], name: stat["stat"].name });
    });
    const res = {
      name: result.name,
      weight: (result.weight / 454).toFixed(2),
      height: result.height / 10,
      abilities: abilities,
      types: types,
      stats: stats,
    };
    return res;
  }

  async search(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      this.requestOptions
    );
    const result = await response.json();
    const abilities = [];
    const types = [];
    const stats = [];
    result.abilities.map((ab) => {
      abilities.push(ab["ability"].name);
    });
    result.types.map((type) => {
      types.push(type["type"].name);
    });
    result.stats.map((stat) => {
      stats.push({ base_stat: stat["base_stat"], name: stat["stat"].name });
    });
    const res = {
      name: result.name,
      weight: (result.weight / 454).toFixed(2),
      height: result.height / 10,
      abilities: abilities,
      types: types,
      stats: stats,
    };
    return res;
  }
}

export default Pokemon;
