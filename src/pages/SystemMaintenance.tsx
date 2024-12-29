import { useEffect, useRef } from "react";
import "../css/pages/caustionPage.css";
import lottie from "lottie-web";
import systemMaintenance from "../assets/animations/systemMaintenance.json";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SystemMaintenance = () => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const { t } = useTranslation()
    const navigate = useNavigate();

    useEffect(() => {
        if (animationContainer.current) {
            const anim = lottie.loadAnimation({
                container: animationContainer.current,
                animationData: systemMaintenance,
                renderer: "svg",
                loop: true,
                autoplay: true,
            });

            return () => {
                anim.destroy();
            };
        }
    }, []);

    const handleLogin = () => {
        navigate("/welcome", { replace: true })
    }


    return (
        <div className="caution-page">
            <div className="caution-body" >
                <div className="caution-animation-container" ref={animationContainer} style={{ width: '320px' }}></div>
                <div className="title">
                    <p>{t("system_maintenance.header")}</p>
                </div>
                <div className="description">
                    <p>{t("system_maintenance.description")}</p>
                </div>
            </div>
            <div className="caution-footer">
                <button onClick={handleLogin}> <p>{t("session_timeout.button")}</p></button>
            </div>
        </div>
    )
}

export default SystemMaintenance;