const cs = {
  join: (...args: string[]) => {
    const trimed = args.map((arg) => arg.trim());
    return trimed.join(" ");
  },
};

export default cs;
