import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import App from './App';
import Login from './pages/Login';
import Food from './pages/Food';
import Drinks from './pages/Drinks';
import DetailsFood from './pages/DetailsFood';
import DetailsDrink from './pages/DetailsDrink';
import ProgressFood from './pages/ProgressFood';
import ProgressDrink from './pages/ProgressDrink';
import Explore from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodByIngredient from './pages/ExploreFoodByIngredient';
import ExploreDrinkByIngredient from './pages/ExploreDrinkByIngredient';
import ExploreFoodByNationality from './pages/ExploreFoodByNationality';
import Profile from './pages/Profile';
import RecipeDone from './pages/RecipeDone';
import Favorite  from './pages/Favorite';


const renderWithRouter = (component) => {
  const customHistory = createMemoryHistory();

  const returnFromRender = render(
    <Router history={ customHistory }>{component}</Router>,
  );

  return { history: customHistory, ...returnFromRender };
}

describe('Testa a Tela de login: /;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela principal de receitas de comidas: /foods;', () => {
  it('Testes do Header', () => {
    renderWithRouter(<Food/>);
    //Testes do Header
    const profilePage = screen.getByRole('img', {name: /login/i});
    const searchIcon = screen.getByRole('img', {name: /search/i});
    const inputTextHeader = screen.getByRole('textbox');
    const searchBtn = screen.getByTestId('exec-search-btn');

    expect(profilePage).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(inputTextHeader).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  })

  it('Testes do Footer', () => {
    renderWithRouter(<Food/>);
    //Testes do Header
    const mealFooterBtn = screen.getByRole('img', {  name: /meal/i})
    const drinkFooterBtn = screen.getByRole('img', {  name: /drink/i})
    const exploreFooterBtn = screen.getByRole('img', {  name: /explore/i})

    expect(mealFooterBtn).toBeInTheDocument();
    expect(drinkFooterBtn).toBeInTheDocument();
    expect(exploreFooterBtn).toBeInTheDocument();

    //Testes do Footer

  })
})

describe('Testa a Tela principal de receitas de bebidas: /drinks;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de detalhes de uma receita de comida: /foods/{id-da-receita};', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de detalhes de uma receita de bebida: /drinks/{id-da-receita};', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de receita em progresso de comida: /foods/{id-da-receita}/in-progress;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de receita em progresso de bebida: /drinks/{id-da-receita}/in-progress;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de explorar: /explore;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de explorar comidas: /explore/foods;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de explorar bebidas: /explore/drinks;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de explorar comidas por ingrediente: /explore/foods/ingredients;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de explorar bebidas por ingrediente: /explore/drinks/ingredients;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de explorar comidas por nacionalidade: /explore/foods/nationalities;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de perfil: /profile;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de receitas feitas: /done-recipes;', () => {
  it('', () => {
    
  })
})

describe('Testa a Tela de receitas favoritas: /favorite-recipes;', () => {
  it('', () => {
    
  })
})

describe('Testa a ', () => {
  it('', () => {
    
  })
})
