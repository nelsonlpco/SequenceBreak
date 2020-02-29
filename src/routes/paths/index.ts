type EnumLiteralsOf<T extends object> = T[keyof T];

export const paths = {
  HOME: "home" as "home",
  CONFIGURE: "configure" as "configure"
};

export type Routes = EnumLiteralsOf<typeof paths>;
