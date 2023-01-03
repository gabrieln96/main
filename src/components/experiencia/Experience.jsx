import React from 'react'
import './experience.css'

import {FaGraduationCap} from 'react-icons/fa'
import {BiBriefcaseAlt2} from 'react-icons/bi'
import {ImCalendar} from 'react-icons/im'


const Experience = () => {

    const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('experience__active')
            })
            target.classListadd('experience__active')

            tab.forEach(tab => {
                tab.classList.remove('experience__active')
            })
            tab.classList.add('experience__active')
        })
    })
  return (
    <section className="experience">
        <h5 className="experience__subtitle1">Minha experiências de trabalho</h5>
        <h2 className='experience__title'>Experiência</h2> 

        <div className="experience__container container">
            <div className='experience__tabs'>
                <div className="experience__button button--flex experience__active" data-target='#education'>
                    <FaGraduationCap className='experience__icon'/>
                    Educação
                </div>

                <div className="experience__button button--flex" data-target="#work">
                    <BiBriefcaseAlt2 className='experience__icon'/>
                    Trabalho
                </div>
            </div>

            <div className="experience__sections">
                <div className="experience__content experience__active" data-contente id="education">
                    <div className="experience__data">
                        <div>
                        <h3 className="experience__title">Ciências da Computação</h3>
                            <span className="experience__subtitle">Faculdade Pitagóras - São Luís - MA</span>
                            <div className="experience__calendar">
                                <ImCalendar className='uil uil-calendar-alt' /> 2014 - 2019
                            </div>
                        </div>
                        <div>
                            <span className='experience__rounder'></span>
                            <span className='experience__line'></span>
                        </div>
                    </div>
                    <div className="experience__data">
                        <div>
                        <h3 className="experience__title">Ciências da Computação</h3>
                            <span className="experience__subtitle">Faculdade Pitagóras - São Luís - MA</span>
                            <div className="experience__calendar">
                                <ImCalendar className='uil uil-calendar-alt' /> 2014 - 2019
                            </div>
                        </div>
                        <div>
                            <span className='experience__rounder'></span>
                            <span className='experience__line'></span>
                        </div>
                    </div>
                    <div className="experience__data">
                        <div>
                        <h3 className="experience__title">Ciências da Computação</h3>
                            <span className="experience__subtitle">Faculdade Pitagóras - São Luís - MA</span>
                            <div className="experience__calendar">
                                <ImCalendar className='uil uil-calendar-alt' /> 2014 - 2019
                            </div>
                        </div>
                        <div>
                            <span className='experience__rounder'></span>
                            <span className='experience__line'></span>
                        </div>
                    </div>
                    
                 </div>

                 <div className="experience__content" data-contente id="work">
                    <div className="experience__data">
                        <div>
                        <h3 className="experience__title">Analista de Suporte / QA</h3>
                            <span className="experience__subtitle">InforGeneses Software</span>
                            <div className="experience__calendar">
                                <ImCalendar className='uil uil-calendar-alt' /> 2022 - até o momento
                            </div>
                        </div>
                        <div>
                            <span className='experience__rounder'></span>
                            <span className='experience__line'></span>
                        </div>
                    </div>
                    <div className="experience__data">
                        <div>
                        <h3 className="experience__title">Técnico em Informática</h3>
                            <span className="experience__subtitle">Ostensiva Segurança</span>
                            <div className="experience__calendar">
                                <ImCalendar className='uil uil-calendar-alt' /> 2021 - 2022
                            </div>
                        </div>
                        <div>
                            <span className='experience__rounder'></span>
                            <span className='experience__line'></span>
                        </div>
                    </div>
                    <div className="experience__data">
                        <div>
                        <h3 className="experience__title">Jovem Aprendiz</h3>
                            <span className="experience__subtitle">Grupo Mateus</span>
                            <div className="experience__calendar">
                                <ImCalendar className='uil uil-calendar-alt' /> 2017 - 2018
                            </div>
                        </div>
                        <div>
                            <span className='experience__rounder'></span>
                            <span className='experience__line'></span>
                        </div>
                    </div>
                    
                 </div>
            </div>
         </div>
        
    </section>
  )
}

export default Experience