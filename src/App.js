import logo from './logo.svg';
import './App.css';
import Lights from './components/Lights.js';

function App() {
  return (
      <div className="App" style={{overflow:'hidden'}}>
        <Lights>
          <div style={{overflow: 'scroll', width: '100vw', height: '100vh', position:'absolute', top:'0px', left:'0px'}}>
            <div style={{
              marginTop: '80vh',
              marginLeft:'25vw',
              width:'50vw',
              backgroundColor:'#FCF5E5',
              height:'130vh',
              display:'grid',
              placeItems:'center',
              justifyContent:'center'

            }}>
              <div
                style={{
                  width: '48vw',
                  height:'125vh',
                  border: '20px solid black',
                  boxSizing: 'border-box',
                  outlineOffset:'-30px',
                  backgroundColor:'transparent',
                }}>
                <h1 align='center' className="menu-title">Incanto</h1>
                <hr className='solid' style={{width: '20vw'}}/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                  <h2 style={{marginBottom: '0px'}} className="menu-header">Beginnings</h2>
                  <hr style={{width: '12vw'}}/>
                  <span className="menu-item">House Marinated Olives <b>4</b></span>
                  <span className="menu-item">Winter citrus, goat cheese, pine nuts, & Marsh <b>10</b></span>
                  <span className="menu-item">Granny Smith apple, cabbage, celery root, walnuts & mustard <b>11</b></span>
                  <span className="menu-item">Butter lettuce, lemon, anchovy & capers <b>11</b></span>
                  <span className="menu-item">Heirloom chicories, balsamic & Pecorino <b>10</b></span>
                  <span className="menu-item">Pickled local herring & shaved vegetables <b>16</b></span>
                  <span className="menu-item">Boccalone cotechino, turnips, carrots & lentil salsa verde <b>12</b></span>
                  <span className="menu-item">Boccalone salumi platter, Piglet 14/Sow 23/ Boar <b>38</b></span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                  <h2 style={{marginBottom: '0px'}} className="menu-header">Pasta and Grains</h2>
                  <hr style={{width: '12vw'}}/>
                  <span className="menu-item">Squid ink calamaretti & octopus sugo <b>17/11</b></span>
                  <span className="menu-item">Cavatelli, pork sausage, turnip greens, chilli & pecorino <b>17/11</b></span>
                  <span className="menu-item">Handkercheif pasta & rustic port ragu <b>17/10</b></span>
                  <span className="menu-item">Strozzapeti, Grandma Rosalie's pigs foot sugo & cannellini beans <b>16/10</b></span>
                  <span className="menu-item">Green garlic & black trumpet mushroom risotto <b>16/10</b></span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                  <h2 style={{marginBottom: '0px'}} className="menu-header">Supper & Supper for Two</h2>
                  <hr style={{width: '12vw'}}/>
                  <span className="menu-item">Grilled octopus, clams, nduja & chickpeas <b>29</b></span>
                  <span className="menu-item">Braised short rib, beef tongue, oysters & horseradish gremolata <b>28</b></span>
                  <span className="menu-item">Pork belly, Kabocha squash & apples <b>24</b></span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                  <h2 style={{marginBottom: '0px'}} className="menu-header">Daily Requirements</h2>
                  <hr style={{width: '12vw'}}/>
                  <span className="menu-item">Roasted purple carrots, honey & distachios <b>5.5</b></span>
                  <span className="menu-item">Braised cabbage Guanciale & rosemary <b>6</b></span>
                  <span className="menu-item">Playe of Frantoio Olivestri DOP extra vergin olive oil <b>3</b></span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                  <h2 style={{marginBottom: '0px'}} className="menu-header">Endings</h2>
                  <hr style={{width: '12vw'}}/>
                  <span className="menu-item">Mascarpone semifreddo, pinenuts, honeycomb & rosemary <b>9</b></span>
                  <span className="menu-item">Bay leaf panna cotta candied kumquats & fresh citrus <b>7</b></span>
                  <span className="menu-item">Chocolate cake, esoressi gelato & cherries <b>9</b></span>
                  <span className="menu-item">Poached pear, red wine granita & fennel <b>7</b></span>
                  <span className="menu-item">Chocolate cake, espresso gelato & cherries <b>9</b></span>
                </div>
                <span style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '5vh'}}>2020 Copyright Incanto Restaurant. All rights reserved</span>
              </div>
            </div>
          </div>
        </Lights>
    </div>
  );
}

export default App;
