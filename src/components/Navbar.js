import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    const logoImg =
        "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <nav className="navbar">
            <div>
                <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
            </div>
            {favoritePokemons.length}❤️
        </nav>
    );
};

export default Navbar;
