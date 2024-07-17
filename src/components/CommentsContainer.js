import React from "react";

const commentsData = [
  {
    name: "Juabir Kasim",
    text: "lorem ipsum dolars",
    replies: [
      {
        name: "Juabir Kasim",
        text: "lorem  ipsum dolars",
      },
      {
        name: "Juabir Kasim",
        text: "lorem  ipsum dolars",
      },
    ],
  },
  {
    name: "Juabir Kasim",
    text: "lorem ipsum dolars",
    replies: [],
  },
  {
    name: "Juabir Kasim",
    text: "lorem ipsum dolars",
    replies: [
      {
        name: "Juabir Kasim",
        text: "lorem ipsum dolars",
        replies: [],
      },
      {
        name: "Juabir Kasim",
        text: "lorem ipsum dolars",
        replies: [],
      },
    ],
  },
  {
    name: "Juabir Kasim",
    text: "lorem ipsum dolars",
    replies: [
      {
        name: "Juabir Kasim",
        text: "lorem ipsum dolars",
        replies: [
          {
            name: "Juabir Kasim",
            text: "lorem ipsum dolars",
            replies: [],
          },
          {
            name: "Juabir Kasim",
            text: "lorem ipsum dolars",
            replies: [
              {
                name: "Juabir Kasim",
                text: "lorem ipsum dolars",
                replies: [],
              },
              {
                name: "Juabir Kasim",
                text: "lorem ipsum dolars",
                replies: [],
              },
              {
                name: "Juabir Kasim",
                text: "lorem ipsum dolars",
                replies: [],
              },
            ],
          },
          {
            name: "Juabir Kasim",
            text: "lorem ipsum dolars",
            replies: [
              {
                name: "Juabir Kasim",
                text: "lorem ipsum dolars",
                replies: [],
              },
              {
                name: "Juabir Kasim",
                text: "lorem ipsum dolars",
                replies: [],
              },
              {
                name: "Juabir Kasim",
                text: "lorem ipsum dolars",
                replies: [
                  {
                    name: "Juabir Kasim",
                    text: "lorem ipsum dolars",
                    replies: [],
                  },
                  {
                    name: "Juabir Kasim",
                    text: "lorem ipsum dolars",
                    replies: [],
                  },
                  {
                    name: "Juabir Kasim",
                    text: "lorem ipsum dolars",
                    replies: [
                      {
                        name: "Juabir Kasim",
                        text: "lorem ipsum dolars",
                        replies: [],
                      },
                      {
                        name: "Juabir Kasim",
                        text: "lorem ipsum dolars",
                        replies: [
                          {
                            name: "Juabir Kasim",
                            text: "lorem ipsum dolars",
                            replies: [],
                          },
                          {
                            name: "Juabir Kasim",
                            text: "lorem ipsum dolars",
                            replies: [],
                          },
                          {
                            name: "Juabir Kasim",
                            text: "lorem ipsum dolars",
                            replies: [],
                          },
                        ],
                      },
                      {
                        name: "Juabir Kasim",
                        text: "lorem ipsum dolars",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Juabir Kasim",
            text: "lorem ipsum dolars",
            replies: [],
          },
        ],
      },
      {
        name: "Juabir Kasim",
        text: "lorem ipsum dolars",
        replies: [],
      },
      {
        name: "Juabir Kasim",
        text: "lorem ipsum dolars",
        replies: [],
      },
      {
        name: "Juabir Kasim",
        text: "lorem ipsum dolars",
        replies: [
          {
            name: "Juabir Kasim",
            text: "lorem ipsum dolars",
            replies: [],
          },
          {
            name: "Juabir Kasim",
            text: "lorem ipsum dolars",
            replies: [],
          },
          {
            name: "Juabir Kasim",
            text: "lorem ipsum dolars",
            replies: [],
          },
          {
            name: "Juabir Kasim",
            text: "lorem ipsum dolars",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  if (!data) return null;
  const { name, text, replies } = data;
  //console.log(name);
  return (
    <div className="flex  p-3 shadow-sm bg-gray-100 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold  whitespace-nowrap">{name}</p>
        <p className="whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if (!comments) return null;
  //!disclaimer : Don't use index as key
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
