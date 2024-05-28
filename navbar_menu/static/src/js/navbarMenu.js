/** @odoo-module **/

import { registry } from '@web/core/registry';
const { Component } = owl;

// Creating a new class as an extension of Component

export class NavbarMenu extends Component {

	setup() {
        super.setup();
    };

    async onClickNavbarMenu() {
        this.env.services.action.doAction('sale.action_quotations_with_onboarding',{
            additionalContext: {
                //SOME CONTEXT IF REQUIRED
            },
        })
        // ACTION TYPE CAN BE CLIENT ACTION, REPORT ACTION OR ANY OTHER.
    };
}

// Assigning Template to class Component 
Object.assign(NavbarMenu, {
    template: 'NavbarMenu',
})


// Here I am adding our template in the navbar. To add in navbar, we have to add our template and 
// class in systray category, respectively.

registry.category('systray').add('navbar_menu.NavbarMenu', { Component: NavbarMenu }, { sequence: 30 });
