import { useEffect, useRef } from "react";
import * as pbi from "powerbi-client";
import getAccessToken from "@/helpers/PowerBIToken";
import { useQuery } from '@tanstack/react-query';

const reportId = import.meta.env.VITE_POWERBI_REPORT_ID;




const PowerBIReport = () => {
  const reportContainer = useRef(null);

  const { isLoading, isError, error, reportToken = "" } = useQuery(['powerBI'], getAccessToken);

  console.log("ReportBIReport " + reportId);

  useEffect(() => {
    const config = {
      type: "report",
      tokenType: pbi.models.TokenType.Embed,
      accessToken: reportToken,
      embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}`,
      id: reportId,
      permissions: pbi.models.Permissions.All,
      settings: {
        panes: {
          filters: {
            expanded: false,
            visible: false,
          },
        },
      },
    };

    const powerBi = new pbi.service.Service(
      pbi.factories.hpmFactory,
      pbi.factories.wpmpFactory,
      pbi.factories.routerFactory
    );

    const report = powerBi.embed(reportContainer.current, config);

    return () => {
      report.off("loaded");
      report.off("error");
      report.destroy();
    };
  }, [reportId]);

  return (
    <div
      ref={reportContainer}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "100vh",
        left: 0,
        transition: "top 0.3s",
        zIndex: 9999,
      }}
    />
  );
};

export default PowerBIReport;