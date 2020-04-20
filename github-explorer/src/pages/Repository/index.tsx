import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/35263018?s=460&u=8a9bfc37d8a66afa159fbac988e80e25fa23476b&v=4"
            alt=""
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  );
}

export default Repository;
