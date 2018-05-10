"use strict";
var personal_component_1 = require('./personal/personal.component');
var work_component_1 = require('./work/work.component');
var address_component_1 = require('./address/address.component');
var result_component_1 = require('./result/result.component');
var workflow_service_1 = require('./workflow/workflow.service');
exports.appStates = [
    // 1st State
    { name: 'personal', url: '/personal', component: personal_component_1.PersonalComponent },
    // 2nd State:
    { name: 'work', url: '/work', component: work_component_1.WorkComponent, onEnter: verifyWorkFlow },
    // 3rd State
    { name: 'address', url: '/address', component: address_component_1.AddressComponent, onEnter: verifyWorkFlow },
    // 4th State
    { name: 'result', url: '/result', component: result_component_1.ResultComponent, onEnter: verifyWorkFlow }
];
function verifyWorkFlow(transition, state) {
    console.log("Entered '" + state.name + "' state.");
    var $stateService = transition.router.stateService;
    var workflowService = transition.injector().get(workflow_service_1.WorkflowService);
    // If any of the previous steps is invalid, go back to the first invalid step
    var firstState = workflowService.getFirstInvalidStep(state.name);
    if (firstState.length > 0) {
        console.log("Redirected to '" + firstState + "' state which it is the first invalid step.");
        return $stateService.target(firstState);
    }
    ;
}
//# sourceMappingURL=app.states.js.map