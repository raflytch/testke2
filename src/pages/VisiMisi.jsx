import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgVisiMisi from "../assets/bg-visimisi.webp";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useEffect } from "react";

const VisiMisi = () => {
  const roleRoutes = {
    siswa: "/student",
    guru: "/teacher",
    admin: "/admin",
    superadmin: "/superadmin",
    ortu: "/parent",
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const userRole = decoded.roles[0]?.toLowerCase();

        if (userRole && roleRoutes[userRole]) {
          navigate(roleRoutes[userRole], { replace: true });
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        Cookies.remove("accessToken", { path: "/" });
      }
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen mt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgVisiMisi})` }}
        />

        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto bg-green-600 text-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-8">
              VISI DAN MISI
            </h1>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Visi</h2>
              <p className="text-sm">
                Mewujudkan generasi yang khoikh, berilmu, dan memimpin. Untuk
                mencapai visi tersebut, SMAIT Granada menjalankan
                program-program unggulan seperti Tahfidz, Arabic Camp, dan BTR
                untuk pembentukan karakter dan cinta Al-Quran.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Misi</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Melahirkan Generasi yang Berakidah Lurus dan Beribadah dengan
                  Benar
                </li>
                <li>
                  Melahirkan Generasi yang Cerdas, Terampil dan Berjiwa Pemimpin
                </li>
                <li>
                  Mewujudkan Lingkungan Belajar yang Ilmiah dengan Pembinaan
                  Akhlak Secara Intensif
                </li>
                <li>
                  Memberikan Pelayanan Pendidikan Terbaik kepada Siswa dan
                  Orangtua
                </li>
                <li>
                  Membangun Kepercayaan & Kemitraan dengan Orangtua, Masyarakat
                  dan Pemerintah
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">
                7 Karakter Pelajar SMA IT Granada
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Akidah yang bersih</li>
                <li>Ibadah yang benar</li>
                <li>Kepribadian yang matang dan berakhlak mulia</li>
                <li>
                  Pribadi yang sungguh-sungguh, disiplin, dan mampu menahan
                  nafsunya
                </li>
                <li>Mampu membaca, menghafal, dan memahami 1 Al-Quran</li>
                <li>Berwawasan luas</li>
                <li>
                  Memiliki keterampilan hidup (kesehatan dan kebugaran, life
                  skill, dan berwirausaha, pengembangan diri)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisiMisi;
