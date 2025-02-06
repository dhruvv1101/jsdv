const prompt = require("prompt-sync")();

function printinfo() {
    console.log("Contact Management System");
    console.log("--------------------------");
    console.log("1) Add a contact");
    console.log("2) Delete a contact");
    console.log("3) View all contacts");
    console.log("4) Search contact");
    console.log("5) Exit");
}

function addcontact() {
    const name = prompt("Name: ").trim();
    const num = prompt("Phone Number: ").trim();

    if (name === "" || num === "") {
        console.log("Invalid input. Name and Phone Number cannot be empty.");
        return;
    }

    const contact = { name, num };
    contacts.push(contact);
    console.log("Contact added successfully!");
}

function delcontact() {
    if (contacts.length === 0) {
        console.log("No contacts to delete.");
        return;
    }

    console.log("xxxxxxxxxxxxxxxxxxxxx");
    console.log("Contact List:");
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}: ${contact.name}`);
    });

    const numb = parseInt(prompt("Enter the number of the contact to delete: "));

    if (numb > 0 && numb <= contacts.length) {
        const deleted = contacts.splice(numb - 1, 1);
        console.log(`Deleted contact: ${deleted[0].name}`);
    } else {
        console.log("Invalid choice.");
    }
}

function viewcontact() {
    if (contacts.length === 0) {
        console.log("No contacts available.");
        return;
    }
    
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%");
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name}`);
        console.log(`Num: ${contact.num}`);
        console.log("--------------------------");
    });
}

function searchcontact() {
    if (contacts.length === 0) {
        console.log("No contacts to search.");
        return;
    }

    const searchstring = prompt("Search: ").toLowerCase();
    const result = contacts.filter(contact => contact.name.toLowerCase().includes(searchstring));

    if (result.length === 0) {
        console.log("No matching contacts found.");
    } else {
        viewcontact(result);
    }
}

const contacts = [];
let running = true;

while (running) {
    printinfo();
    const number = parseInt(prompt("Enter a number (1-5): "));

    switch (number) {
        case 1:
            addcontact();
            break;
        case 2:
            delcontact();
            break;
        case 3:
            viewcontact();
            break;
        case 4:
            searchcontact();
            break;
        case 5:
            running = false;
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid option, please enter a number between 1 and 5.");
    }
}
