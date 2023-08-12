# LawLinkLK

<h3>Description :</h3> 
This is a webapp where you can book an appointment with a lawyer.
<br/>

### 📃Features :

<ul>
<li>User can register and login.</li>
<li>You can view all available lawyers on the site.</li>
<li>You can also update your profile.</li>
<li>You can also send your queries to us from the contact section.</li>
<li>You can view all your notifications in the notifications tab.</li>
<li>There is also an admin management system.</li>
<li>You can only access your notifications, profile, appointments, lawyer application if you're logged in</li>
<li>User can also apply for becoming a lawyer on our site.</li>
<li>User can book an appointment with the lawyer of their own choice.</li>
<li>Admin has the control to accept any user's request to become a lawyer.</li>
<li>Admin can also remove any user or lawyer from the site.</li>
<li>Lawyer and Admin have the control to mark if the appointment is completed.</li>
<li>User will receive notification if their application is accepted or rejected.</li>
<li>User and Lawyer will receive notification if their appointment is completed.</li>
<li>Lawyer will receive notification if someone booked appointment with them.</li>
<li>All the data will be stored on the database so there is no chance of losing you information.</li>
</ul>

<hr/>

### To run the project on your local machine

<ol>
<li>Download the project from the git repository</li>
<li>Add .env file in root directory for the backend which contains</li>

```
PORT=5000
MONGO_URI=YOUR_OWN_MONGODB_URL
JWT_SECRET=YOUR_JWT_SECRET
```
<li>Add .env file in client directory for the frontend which contains</li>

```

REACT_APP_SERVER_DOMAIN=http://localhost:5000/api
REACT_APP_CLOUDINARY_BASE_URL=https://api.cloudinary.com/v1_1/{CLOUD_NAME}/image/upload
REACT_APP_CLOUDINARY_CLOUD_NAME=YOUR_OWN_CLOUDINARY_CLOUD_NAME
REACT_APP_CLOUDINARY_PRESET=YOUR_OWN_CLOUDINARY_PRESET
REACT_APP_FORM_ACTION=formspree.io link
```
**Note:** Replace the **{CLOUD_NAME}** with your own cloudinary cloud name
