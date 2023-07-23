const groups = [
    {
      id: Math.random().toString(36).slice(2),
      color: "red",
      tasks: [
        {
          id: "sdfss",
          side: "null",
          tasktTitle: "learn CSS",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "IN WORK",
          priority: "LOW",
        },
        {
          id: "dfhdfh",
          side: "null",
          tasktTitle: "learn vue",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "STUCK",
          priority: "LOW",
        },
        {
          id: "ffgkj",
          side: "null",
          tasktTitle: "learn js",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "DONE",
          priority: "LOW",
        },
      ],
    },
    {
      id: Math.random().toString(36).slice(2),
      color: "blue",
      tasks: [
        {
          id: "t101",
          side: "null",
          tasktTitle: "drag and drop it",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "IN WORK",
          priority: "LOW",
        },
        {
          id: "t102",
          side: "null",
          tasktTitle: "do all tasks",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "STUCK",
          priority: "LOW",
        },
        {
          id: "t103",
          side: "null",
          tasktTitle: "wash dishes",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "DONE",
          priority: "LOW",
        },
      ],
    },
    {
      id: Math.random().toString(36).slice(2),
      color: "green",
      tasks: [
        {
          id: "nerny",
          side: "null",
          tasktTitle: "Driver license",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "IN WORK",
          priority: "LOW",
        },
        {
          id: "tytr",
          side: "null",
          tasktTitle: "walk the dog",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "STUCK",
          priority: "LOW",
        },
        {
          id: "ngfxz",
          side: "null",
          tasktTitle: "coding power",
          members: [
            { name: "din", color: "red" },
            { name: "yona", color: "black" },
            { name: "dore", color: "green" },
          ],
          date: "27-02-2022",
          status: "DONE",
          priority: "LOW",
        },
      ],
    },
  ]

  export const groupService = {
   getGroups
}

  function getGroups(){
    return groups
  }