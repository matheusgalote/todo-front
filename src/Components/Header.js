import React from "react";

const Header = () => {
  return (
    <header>
      <div className="ui secondary  menu">
        <a className="active item">Tarefas</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item">Sair</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
