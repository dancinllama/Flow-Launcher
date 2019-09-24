# Flow Launcher

## The Problem
When you link directly to a flow, whether it's in LEX or Classic, you see the flow displayed, but only the flow.  The LEX interface is not shown, you do not see any tabs, nor the console view.  Just the flow.  

## The Solution
To combat this, I created a lightning component, which uses the isUrlAddressable interface and displays the flow.  It's generic, and it accepts url parameters:

c__flow: The API name of the Flow you'd like to run.

c__myVariable1, c__myVariable2, c__myVariable3, etc. :  If your flow accepts String parameters (only string parameters are supported currently), then pass them in as URL parameters, with a prefix of "c__".

## The URL
To call the lightning component / flow directly from a URL, use the following path:

/cmp/c__flowLauncher?c__flow=flowApiNameGoesHere&c__someVariableGoesHere=value&c__someOtherVariableGoesHere
