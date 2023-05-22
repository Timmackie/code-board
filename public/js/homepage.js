var showMoreButton = document.getElementById("showmoreButton");

var currentPosts = parseInt(window.location.pathname.slice(1));
console.log(window.location.pathname.slice(1));
var increment = 5;

// Event listener for "Show 5 More" button
showmoreButton.addEventListener("click", function () {
  currentPosts += increment;
  window.location.href = `/${currentPosts}`;
});

const getUserId = async () => {
  try {
    const response = await fetch("/api/user/id", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      const userId = data.userId.toString();
      return userId;
    } else {
      throw new Error("Could not get user id.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//Delete post by id function
const deletePost = (id) =>
  fetch(`/api/post/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

// Delete the clicked note
const handleNoteDelete = async (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  const loggedInUserId = await getUserId();
  const postUserId = e.target.dataset.userId;
  const postId = e.target.dataset.postId;
  
  //Only allow the removal of posts by the creator
  if (loggedInUserId === postUserId) {
    const response = await deletePost(postId);
    if (response.ok) {
      alert("Deleted post!");
      document.location.replace("/");
    } else {
      alert("Could not delete post.");
    }
  } else {
    alert("You don't have permission to delete this post.");
  }
};

const delBtn = document.getElementsByClassName("deleteButton");

// Loop through the delete buttons and add the click event listener to each
for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("click", handleNoteDelete);
}
