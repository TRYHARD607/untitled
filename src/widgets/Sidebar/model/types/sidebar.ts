export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FC<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}
