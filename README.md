# 5e PHB CSS for Foundry VTT Journals

![Example Image of this CSS](https://github.com/Daxiongmao87/foundry-vtt-5e-phb-journal-styling/blob/main/images/screenshot.png?raw=true)

## Usage
1. First you'll need to install and enable the module in your world: https://foundryvtt.com/packages/custom-css
2. Then copy the code from: https://github.com/Daxiongmao87/foundry-vtt-5e-phb-journal-styling/blob/main/5e-phb.css
3. In your world, navigate to Configure Settings -> Module Settings -> Custom CSS -> Custom CSS Rules
4. Paste the copied code from step 2, and save changes
5. Now when you make a journal entry, using the built-in journal formatting tools, it should mimic the 5e PHB style.

**Note:** In order to use css options like the class-specific table in the screenshot above, you'll have to:
1.  Edit the source of that journal entry

    ![Source Screenshot](https://github.com/Daxiongmao87/foundry-vtt-5e-phb-journal-styling/blob/main/images/source-screenshot.png?raw=true)
2. Navigate to your `<table ...>` line
3. add this class to it: `class='.class-table'` 
