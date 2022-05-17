const SUPABASE_URL = 'https://szwsopsapbebqcbwovmf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6d3NvcHNhcGJlYnFjYndvdm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3MzU5MTAsImV4cCI6MTk2ODMxMTkxMH0.gc3PaaZ_FbxjkW7bGXL3yScgDS9EMa7Hwe5zOOQ8ijM';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async  function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function getAuth() {
const user = getUser()

if(!user) location.replace('/')
}

export function redirectIfLoggedIn() {
    if(getUser()) {
        location.replace('/boards')
    }
}

export async function signUp(email, password) {
const resp = await client.auth.session().signUp({email, password})
if(resp.user) {
    return resp.user
    } else {
        alert('create an account')
    }
}

export async function signIn(email, password) {
    const resp = await client.auth.session().signIn({email, password})
    if(!resp.user) {
        return alert('create an account')
        }
}

export async function createBulletin(name, task, dop, completed ) {
const resp = await client
.from('bulletin_board')
.insert({ name: name, task: task, dop: dop, completed: completed })

return resp.data;
}

export async function getBulletins(){
const resp = await client
.from('bulletin_board')
.select('*')
console.log(resp)
return resp.data;
}

export async function getBulletin(id) {
const resp = await client
.from('bulletin_board')
.select('*')
.match({ id })
.single();

return resp.data;
}


export async function logOut() {
await client.auth.signOut();

return (window.location.href = '/'); 
}

