import CustomToolbar from "@/src/components/CustomToolbar";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: {
    container:"#toolbar" // CustomToolBarコンポーネントを指定
  },
};

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function ContentEditor({ value, onChange }: Props) {

  return (
    <div className="mb-6">
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        onKeyDown={(e) => {
          // Shift + Enter での改行を無効化（送信防止）
          if (e.key === "Enter" && e.shiftKey) e.preventDefault();
        }}
      />
    </div>
  );
}
