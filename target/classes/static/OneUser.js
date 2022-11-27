$(async function () {
    await thisUser();
});

async function thisUser() {
    fetch("http://localhost:8088/api/showUser")
        .then(res => res.json())
        .then(data => {
            $('#headerUsername').append(data.email);
            let roles = data.roles.map(role => " " + role.name.substring(5));
            $('#headerRoles').append(roles);

            let user = `$(
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.surname}</td>
                <td>${data.age}</td>
                <td>${data.email}</td>
                <td>${roles}</td>)`;
            $('#userPanelBody').append(user);
        })
}