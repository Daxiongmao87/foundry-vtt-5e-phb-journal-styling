# D&D 5th Edition PHB Journal Styling for Foundry VTT

![Example Image of this CSS](https://github.com/Daxiongmao87/foundry-vtt-5e-phb-journal-styling/blob/main/images/screenshot.png?raw=true)

## Usage (With Module)
1. First you'll need to copy the Manifest URL: `https://raw.githubusercontent.com/Daxiongmao87/foundry-vtt-5e-phb-journal-styling/main/module.json`
2. Navigate to your Foundry VTT instance, go to Addon Modules and click on the Install Module button.
3. Paste the Manifest URL in the field at the bottom where it says "Manifest URL:" and click the install button.
4. Load your world.
5. Navigate to the Settings tab, then click the 'Manage Modules' button.
6. Search for the D&D 5th Edition PHB Journal Styling module, and ensure the checkbox is checked, and click on the "Save Module Settings" button.
7. Create a journal and see!


## Usage (Without Module)
1. First you'll need to install and enable this module in your world: https://foundryvtt.com/packages/custom-css
2. Then copy the code from: https://github.com/Daxiongmao87/foundry-vtt-5e-phb-journal-styling/blob/main/5e-phb.css
3. In your world, navigate to Configure Settings -> Module Settings -> Custom CSS -> Custom CSS Rules
4. Paste the copied code from step 2, and save changes
5. Now when you make a journal entry, using the built-in journal formatting tools, it should mimic the 5e PHB style.

**Note:** In order to use css options like the class-specific table in the screenshot above, you'll have to:
1.  Edit the source of that journal entry

    ![Source Screenshot](https://github.com/Daxiongmao87/foundry-vtt-5e-phb-journal-styling/blob/main/images/source-screenshot.png?raw=true)
2. Navigate to your `<table ...>` line
3. add this class to it: `class='class-table'` 

## Credit
All font used in this CSS is from https://github.com/jonathonf/solbera-dnd-fonts
