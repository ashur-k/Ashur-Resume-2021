import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './navbarElements.styled.components'

function Header() {
    return (
        <div>
            <header>
                <Nav>
                    <NavLink to="/">
                        <h1>Logo</h1>
                    </NavLink>
                    <Bars />
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            Skill Level
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                            Projects
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                            Work Experience
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                            Education
                        </NavLink>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to=''>Download My CV</NavBtnLink>
                    </NavBtn>
                </Nav>
            </header>
        </div>
    )
}

export default Header
