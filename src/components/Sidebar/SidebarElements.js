import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SideBarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:flex;
    align-items:center;
    justify-content:center;
    top0;
    left0;
    transition:0.3s ease-in-out;
    
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and(max-width:480px) {
    grid-template-rows: repeat(6, 80px);
  }
`;

export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-contnet: center;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  list-style: none;
  trasition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarRoute = styled(LinkR)`
  border-radius:50px;
  background:#01bf71;
  white-space:nowrap;
  padding:16px 64px;
  color:#010606;
  font-size:16px;
  outline:none;
  border:none;
  cursor:pointer:
  
  text-decoration:none;

  &:hover {
    color: #ccc;
    background:red;
    transition: 0.2s ease-in-out;
  }
  
`;
