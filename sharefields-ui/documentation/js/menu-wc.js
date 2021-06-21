'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sharefields-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-58fca31c05c20abde85b2309b0f0ec57"' : 'data-target="#xs-components-links-module-AppModule-58fca31c05c20abde85b2309b0f0ec57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-58fca31c05c20abde85b2309b0f0ec57"' :
                                            'id="xs-components-links-module-AppModule-58fca31c05c20abde85b2309b0f0ec57"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InfoQuadraModule.html" data-type="entity-link">InfoQuadraModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InfoQuadraModule-9ba8042a96f6707a302bbd8a1c9e93eb"' : 'data-target="#xs-components-links-module-InfoQuadraModule-9ba8042a96f6707a302bbd8a1c9e93eb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoQuadraModule-9ba8042a96f6707a302bbd8a1c9e93eb"' :
                                            'id="xs-components-links-module-InfoQuadraModule-9ba8042a96f6707a302bbd8a1c9e93eb"' }>
                                            <li class="link">
                                                <a href="components/AtualizarHorarioQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtualizarHorarioQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExcluirHorarioQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExcluirHorarioQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListarHorarioQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListarHorarioQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NovoHorarioQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NovoHorarioQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParticiparQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParticiparQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SairQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SairQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnidadeInfoQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnidadeInfoQuadraComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuadraModule.html" data-type="entity-link">QuadraModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuadraModule-66df3485d9953a5aa17f9d098c348858"' : 'data-target="#xs-components-links-module-QuadraModule-66df3485d9953a5aa17f9d098c348858"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuadraModule-66df3485d9953a5aa17f9d098c348858"' :
                                            'id="xs-components-links-module-QuadraModule-66df3485d9953a5aa17f9d098c348858"' }>
                                            <li class="link">
                                                <a href="components/AtualizarQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtualizarQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastroQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastroQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExcluirQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExcluirQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListagemQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListagemQuadraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnidadeQuadraComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnidadeQuadraComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RaizModule.html" data-type="entity-link">RaizModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RaizModule-0fdd23475d769271b4edbaf9cfd7e743"' : 'data-target="#xs-components-links-module-RaizModule-0fdd23475d769271b4edbaf9cfd7e743"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RaizModule-0fdd23475d769271b4edbaf9cfd7e743"' :
                                            'id="xs-components-links-module-RaizModule-0fdd23475d769271b4edbaf9cfd7e743"' }>
                                            <li class="link">
                                                <a href="components/AlertaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavLateralComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavLateralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavSuperiorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavSuperiorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SobreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SobreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioModule.html" data-type="entity-link">UsuarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsuarioModule-463e440c89aed0d2e3284769e1491966"' : 'data-target="#xs-components-links-module-UsuarioModule-463e440c89aed0d2e3284769e1491966"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsuarioModule-463e440c89aed0d2e3284769e1491966"' :
                                            'id="xs-components-links-module-UsuarioModule-463e440c89aed0d2e3284769e1491966"' }>
                                            <li class="link">
                                                <a href="components/CadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarContaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditarContaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverViewUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverViewUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PainelControleUsuarioJogadorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PainelControleUsuarioJogadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PainelControleUsuarioMqComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PainelControleUsuarioMqComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/InfoQuadra.html" data-type="entity-link">InfoQuadra</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quadra.html" data-type="entity-link">Quadra</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link">UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertasService.html" data-type="entity-link">AlertasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InfoQuadraService.html" data-type="entity-link">InfoQuadraService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuadraService.html" data-type="entity-link">QuadraService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});