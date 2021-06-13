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
                        <NavLink to="/skills" activeStyle>
                            Skill Level
                        </NavLink>
                        <NavLink to="/projects" activeStyle>
                            Projects
                        </NavLink>
                        <NavLink to="/work-expereince" activeStyle>
                            Work Experience
                        </NavLink>
                        <NavLink to="/education" activeStyle>
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
