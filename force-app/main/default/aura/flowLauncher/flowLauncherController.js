({
  doInit: function(component, event, helper) {
    var pageRef = component.get("v.pageReference");
    var flow = component.find("flow");
    var flowVariables = [];
    Object.keys(pageRef.state).forEach(key => {
      //Remove the c__ prefix
      var flowVariableName = key.substr(3);
      if (flowVariableName !== "flow") {
        flowVariables.push({
          name: flowVariableName,
          type: "String",
          value: pageRef.state[key]
        });
      }
    });
    flow.startFlow(pageRef.state.c__flow, flowVariables);
  }
});
