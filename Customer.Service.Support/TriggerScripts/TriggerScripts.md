# Trigger Scripts

Trigger scripts are CrmScripts that are run on user-interface events.
Unlike webhooks they are run as part of the user-interface and can affect
the workflow.

1. autolist

There can be many scripts hooked to the same event - in which case they are run 
in order of registration.
