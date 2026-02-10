import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";

// GitHub Pages의 저장소 이름인 /website/를 경로의 기준으로 고정합니다.
const base = "/website/"; 
const isPreview = false;

export default defineConfig({
  // 이 base 설정이 있어야 브라우저가 자바스크립트와 이미지 파일을 정확한 위치에서 찾을 수 있습니다.
  base: base,
  
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          react: [
            "React", "useState", "useEffect", "useContext", "useReducer",
            "useCallback", "useMemo", "useRef", "useImperativeHandle",
            "useLayoutEffect", "useDebugValue", "useDeferredValue",
            "useId", "useInsertionEffect", "useSyncExternalStore",
            "useTransition", "startTransition", "lazy", "memo",
            "forwardRef", "createContext", "createElement",
            "cloneElement", "isValidElement",
          ],
        },
        {
          "react-router-dom": [
            "useNavigate", "useLocation", "useParams", "useSearchParams",
            "Link", "NavLink", "Navigate", "Outlet",
          ],
        },
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      dts: true,
    }),
  ],
  build: {
    sourcemap: true,
    // 빌드된 파일들이 생성될 폴더 이름입니다.
    outDir: "out", 
  },
  resolve: {
    alias: {
      // '@' 기호를 사용해 파일 경로를 짧고 정확하게 입력할 수 있게 해줍니다.
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
