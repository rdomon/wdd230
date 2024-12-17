document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members-container');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');

    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();
            return data.members;
        } catch (error) {
            console.error('Error fetching members:', error);
            return [];
        }
    }

    function createMemberCard(member) {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `
            <img src="images/${member.logo}" alt="${member.name} Logo" class="member-logo">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            <p>${member.description}</p>
        `;
        return card;
    }

    function createMemberListItem(member) {
        const listItem = document.createElement('div');
        listItem.classList.add('member-list-item');
        listItem.innerHTML = `
            <span class="member-name">${member.name}</span>
            <span class="member-address">${member.address}</span>
            <span class="member-phone">${member.phone}</span>
            <span class="member-level">${member.membershipLevel}</span>
        `;
        return listItem;
    }

    function displayMembers(members, isGridView = true) {
        membersContainer.innerHTML = '';
        membersContainer.classList.toggle('members-grid', isGridView);
        membersContainer.classList.toggle('members-list', !isGridView);

        const displayFunction = isGridView ? createMemberCard : createMemberListItem;
        members.forEach(member => {
            membersContainer.appendChild(displayFunction(member));
        });
    }

    async function initDirectory() {
        const members = await fetchMembers();
        displayMembers(members);

        gridViewBtn.addEventListener('click', () => displayMembers(members, true));
        listViewBtn.addEventListener('click', () => displayMembers(members, false));
    }

    initDirectory();
});




// Example structure
function createMemberCard(member) {
    const card = document.createElement('div');
    card.classList.add('member-card');
    
    const img = document.createElement('img');
    img.src = member.logoUrl;
    img.alt = `${member.name} logo`;
    
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('member-info');
    
    const nameEl = document.createElement('h3');
    nameEl.textContent = member.name;
    
    const addressEl = document.createElement('p');
    addressEl.textContent = member.address;
    
    const phoneEl = document.createElement('p');
    phoneEl.textContent = member.phone;
    
    infoDiv.appendChild(nameEl);
    infoDiv.appendChild(addressEl);
    infoDiv.appendChild(phoneEl);
    
    card.appendChild(img);
    card.appendChild(infoDiv);
    
    return card;
  }